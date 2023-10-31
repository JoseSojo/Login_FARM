'''
def list_serial(moviments) -> list:
    return [moviments_serial(moviment) for moviment in moviments]
'''

def individual_user(user) -> dict:
    return {
        "id": str(user['_id']),
        'email': user['email'],
        'password': user['password'],
        'username': user['username'],
        'profile_id': str(user['profile_id']),
        'date': user['date']
    }

def profile_serial(profile) -> dict:
    return {
        "id": str(profile['_id']),
        'photo_profile': profile['photo_profile'],
        'country': profile['country'],
        'city': profile['city'],
    }
