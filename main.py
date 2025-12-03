import os
#from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, url_for
#import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test')
def test():
    return render_template('test.html')


"""English Version Routes"""

@app.route('/en')
def home_en():
    return render_template('en/index.html')


if __name__ == '__main__':
    app.run(debug=True)