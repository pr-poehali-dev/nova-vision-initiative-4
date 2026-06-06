import json
import os

import psycopg2


def handler(event: dict, context) -> dict:
    """Приём и сохранение заказов шашлыка"""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if event.get('httpMethod') == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = body.get('name', '').strip()
        phone = body.get('phone', '').strip()
        meat_type = body.get('meat_type', '').strip()
        portions = int(body.get('portions', 1))
        comment = body.get('comment', '').strip()

        if not name or not phone or not meat_type:
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Заполните имя, телефон и выберите мясо'}, ensure_ascii=False)
            }

        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO t_p9788778_nova_vision_initiati.orders (name, phone, meat_type, portions, comment) VALUES (%s, %s, %s, %s, %s) RETURNING id",
            (name, phone, meat_type, portions, comment)
        )
        order_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'success': True, 'order_id': order_id}, ensure_ascii=False)
        }

    return {'statusCode': 405, 'headers': cors_headers, 'body': json.dumps({'error': 'Method not allowed'})}
