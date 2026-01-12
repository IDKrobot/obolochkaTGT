from services.database import DatabaseService

class API:
    def __init__(self):
        self.db = DatabaseService()

    def get_user_data(self, user_id):
        # Логика получения данных
        return self.db.fetch_user(user_id)

    def minimize_window(self):
        import webview
        webview.active_window().minimize()