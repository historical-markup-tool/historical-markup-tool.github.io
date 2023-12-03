import re
from pyscript import document

def submit_text(event):
    print("called submit text function!")
    title = document.querySelector('#teiHeaderTitle').value
    print(title)

    output_div = document.querySelector('#tei-output')
    output_div.innerText = title