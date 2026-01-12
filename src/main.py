import webview
import os
from pathlib import Path

class Api:
    def set_status(self, status):
        print(f"Статус изменен на: {status}")
        return f"Python получил: {status}"

def initialize():
    api = Api()
    # Определяем путь к папке src/ui относительно main.py
    current_dir = Path(__file__).parent
    html_path = current_dir / "ui" / "index.html"

    window = webview.create_window(
        'Traffic Manager Pro',
        url=str(html_path),
        js_api=api,
        width=1600,
        height=900,
        background_color='#08080a',
        resizable=True
    )
    
    webview.start(debug=True)

if __name__ == '__main__':
    initialize()