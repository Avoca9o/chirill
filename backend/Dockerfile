FROM python:3.8-slim

WORKDIR /src

COPY ./src /src
COPY requirements.txt /src/

RUN pip install --no-cache-dir --upgrade -r requirements.txt

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "80"]