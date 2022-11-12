from django.shortcuts import render


def index(request):
    context = {
            data = request.GET
            'access': data.get('access', ""),
            'refresh': data.get('refresh', ""),
    }
    return render(request, "multiends/web.html", context)

