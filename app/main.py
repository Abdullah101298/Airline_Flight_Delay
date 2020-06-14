##################################################
# IMPORT DEPENDENCIES                            #
##################################################

import pymongo
from pymongo import MongoClient

##################################################
# SETUP CONNECTION TO MONGODB                    #
##################################################

conn = "mongodb+srv://AbdullahAlm:Aaaa1234@cluster0-ws5s7.mongodb.net/HISHAM_ELHASSAN"
client = MongoClient(conn)
db = client['Airlines']
col_1 = db['Final_data']
col_2 = db['2009data_max_ARR_DELAY']
col_3 = db['2018data_max_ARR_DELAY']

##################################################
# RETREIVE DATA FROM MONGODB                     #
##################################################

# Getting Data
def getData():
    results = col_1.find({}, {"_id":0}).limit(5)
    w=[] 
    for result in results:
        w.append(result)
    return print(w)

# Sample of final data
def getSample():
    result = col_1.find({}, {"_id":0}).limit(40)
    sample = [] 
    for j in result:
        sample.append(j)
    return sample

# Final_max_Arr_Delay_Data
def final_Data():
    results = col_1.find({}, {'_id':0})
    final_Data = []
    for result in results:
        final_Data.append(result)
    return final_Data

# # 2009_max_Arr_Delay_Data
def d2009_max_Arr_Delay():
    results = col_2.find({}, {'_id':0}).limit(40)
    maxAD2009 = []
    for result in results:
        maxAD2009.append(result)
    return maxAD2009

# 2018_max_Arr_Delay_Data
def d2018_max_Arr_Delay():
    results = col_3.find({}, {'_id':0}).limit(40)
    maxAD2018 = []
    for result in results:
        maxAD2018.append(result)
    return maxAD2018

if __name__ == '__main__':
    getData()



