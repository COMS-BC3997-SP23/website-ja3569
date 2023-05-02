import json
import re

def read_txt_file(file_name):
    with open(file_name, 'r') as f:
        content = f.read()
    return content

def parse_list(str_list):
    str_list = str_list.strip('[]')
    items = re.findall(r'\d+', str_list)
    return [int(item) for item in items]

def convert_to_json(txt_content):
    data = [re.split(', (?=(?:[^"]*"[^"]*")*[^"]*$)', line) for line in txt_content.strip().split(';\n') if line.strip()]

    json_data = []
    for item in data:
        if len(item) == 10:
            organization = {
                "name": item[0].strip('"'),
                "website": item[1].strip('"'),
                "country": item[2].strip('"'),
                "postal_code": item[3].strip('"'),
                "address": item[4].strip('"'),
                "un_goals": parse_list(item[5].strip('"')),
                "sponsors": [item[6].strip('"').replace('[\"', ''), item[7].strip('"'), item[8].strip('"').replace('\"]', '')],
                "found_year": item[9].strip('"')
            }
        json_data.append(organization)

    return json_data

def save_json_to_file(json_data, file_name):
    with open(file_name, 'w') as f:
        json.dump(json_data, f, indent=4)

if __name__ == "__main__":
    txt_content = read_txt_file("ngoInfo.txt")
    json_data = convert_to_json(txt_content)
    save_json_to_file(json_data, "ngoInfo.json")
