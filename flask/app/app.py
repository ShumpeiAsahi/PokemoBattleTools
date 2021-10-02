#Flaskとrender_template（HTMLを表示させるための関数）をインポート
from flask import Flask, render_template
from app import serch_poke_name
from app import get_poke_no

#Flaskオブジェクトの生成
app = Flask(__name__)

#「/」へアクセスがあった場合に、「index.html」を返す
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/serch_poke_name" ,methods=["POST"])
def serch():
    return serch_poke_name.name_serch()

@app.route("/get_poke_no" ,methods=["POST"])
def getNo():
    return get_poke_no.get_poke_no()

#おまじない
if __name__ == "__main__":
    app.run(debug=True)