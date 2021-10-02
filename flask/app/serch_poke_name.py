from flask import Flask, render_template, request,make_response
import json
import wanakana


def name_serch():
    print('name_serch関数呼び出しOK')
    if request.method == 'POST':
        print('POSTリクエストOK')
        req = request.json['param1']
        print(req)
        word =  wanakana.to_katakana(req)

        #JSONファイルを開き辞書型にする
        with open('app/static/JSON/all-poke-jp.json','r',encoding="utf-8_sig") as data_file:
            data = json.load(data_file)

        p_name = [d.get('name') for d in data]
        result = []

        for i in p_name:
            if word in i:
                result.append(i)
        print(result)

    return json.dumps(result)

         
