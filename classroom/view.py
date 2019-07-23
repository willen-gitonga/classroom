from django.shortcuts import render
from .models import Stude
from .forms import StudeForm


def add_student(request):

    current_user = request.user

    if request.method == 'POST':
        form = StudeForm(request.POST)
        if form.is_valid():
            stude = form.save(commit=False)
            stude.save()

    else:
        form = StudeForm()

    return render(request, 'student.html', locals())
