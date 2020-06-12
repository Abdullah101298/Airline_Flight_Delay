##################################################
# IMPORT DEPENDENCIES                            #
##################################################

from main import getSample, final_Data, d2009_max_Arr_Delay, d2018_max_Arr_Delay
from flask import Flask, jsonify, render_template

#################################################
# Flask Setup                                   #
#################################################
app = Flask(__name__)

#################################################
# Flask Routes                                  #
#################################################

@app.route("/")
def welcome():
    airlines = getSample()
    return render_template("index.html", airlines=airlines)


@app.route("/api/v1.0")
def show_apis():
    """List all available api routes."""
    return (
        f"<h4>Available Routes:</h4>"
        f'<a href="/api/v1.0/Sample_Final_Airlines_Data">/api/v1.0/Sample_Final_Airlines_Data</a><br/>'
        f'<a href="/api/v1.0/Final_Airlines_Data">/api/v1.0/2018_Airlines_Data</a><br/>'       
        f'<a href="/api/v1.0/2009_max_Arr_Delay_Data">/api/v1.0/2009_max_Arr_Delay_Data</a><br/>' 
        f'<a href="/api/v1.0/2018_max_Arr_Delay_Data">/api/v1.0/2018_max_Arr_Delay_Data</a><br/>' 
        f'<a href="/"><h4>Back</h4></a><br/>' 
    )

@app.route("/api/v1.0/Sample_Final_Airlines_Data")
def get_Sample_Final_Data():
    return jsonify(getSample())

@app.route("/api/v1.0/Final_Airlines_Data")
def get_Data(): 
    return jsonify(final_Data())   

@app.route("/api/v1.0/2009_max_Arr_Delay_Data")
def get_2009_max_arr_Data():
    return jsonify(d2009_max_Arr_Delay())

@app.route("/api/v1.0/2018_max_Arr_Delay_Data")
def get_2018_max_arr_Data():
    return jsonify(d2018_max_Arr_Delay())


if __name__ == "__main__":
    app.run()
