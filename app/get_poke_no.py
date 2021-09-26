from flask import Flask, render_template, request,make_response
import json

def get_poke_no():
    print('get_poke_no関数呼び出しOK')
    if request.method == 'POST':
        print('GETリクエストOK')
        req = request.json['name']
        print(req)

        #JSONファイルを開き辞書型にする
        with open('app/static/JSON/all_poke_info.json','r',encoding="utf-8_sig") as data_file:
            data = json.load(data_file)

        i = next((i for i in data if i['name'] == req), None)
        if i:
            print(i['no'])
            print(i)
    return json.dumps(i)