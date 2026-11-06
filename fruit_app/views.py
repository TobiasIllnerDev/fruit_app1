from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def send_fruits(request):
    # Das Gewicht ist jeweils in Gramm angegeben.
    fruits = [
        {"name": "Apfel", "gewicht": 180, "farbe": "Rot"},
        {"name": "Banane", "gewicht": 120, "farbe": "Gelb"},
        {"name": "Birne", "gewicht": 160, "farbe": "Grün"},
        {"name": "Orange", "gewicht": 200, "farbe": "Orange"},
        {"name": "Pflaume", "gewicht": 50, "farbe": "Violett"},
    ]
    # safe=False erlaubt eine Liste als JSON-Antwort.
    return JsonResponse(fruits, safe=False, json_dumps_params={"ensure_ascii": False})
