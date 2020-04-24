from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cuba')
def cuba():
    return render_template('cuba.html')

@app.route('/italia')
def italia():
    return render_template('italia.html')

if __name__ == '__main__':
    app.run(debug=True)
