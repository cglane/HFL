# !/bin/bash

source venv/bin/activate

python Backend/manage.py runserver &

cd ./Frontend

npm run start