FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY server.py .
COPY scraped_data.json .

EXPOSE 8000

CMD ["python", "server.py"]
