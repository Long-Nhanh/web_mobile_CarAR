from flask import Flask, render_template
import mysql.connector


app = Flask(__name__)

# Connect to the MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="webcar"
)
cursor = db.cursor()
cursor.execute("SELECT * FROM `car_info` WHERE 1;")
data = cursor.fetchall()

# cursor = db.cursor()
# cursor.execute("SELECT * FROM `car_introduce` WHERE 1;")
# data_intro = cursor.fetchall()

@app.route('/')
def index():
    return render_template('index.html', data=data)

@app.route('/product/<int:id>')
def detail(id):
    cursor.execute("SELECT * FROM car_info JOIN car_introduce ON car_info.id= car_introduce.id_intro JOIN car_specifications ON car_info.id= car_specifications.id_speci JOIN car_position ON car_info.id= car_position.id_posi JOIN car_data_position ON car_info.id=car_data_position.id_data JOIN car_tt ON car_info.id=car_tt.id_tt WHERE id = %s;", (id,))
    data_intro = cursor.fetchone()
    return render_template('product.html', data=data_intro)

@app.route('/test')
def test():
    return render_template('test.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
