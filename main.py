import os
from dotenv import load_dotenv
from flask import Flask as Flask, render_template, request, redirect, url_for, flash
import smtplib

"""Attempt to make a script to send email?"""

#Load env file

load_dotenv()

app = Flask(__name__)

#Get env email and password

EMAIL_ADDRESS = os.getenv('EMAIL_USER')
EMAIL_PASSWORD = os.getenv('EMAIL_PASS')

@app.route('/process_form', methods=['GET', 'POST'])

def submit_form():
    
    if request.method == "POST":
        form_type = request.form.get('formType')
        
        try:
            userName = request.form['userName']
            userMail = request.form['userMail']
            userPhone = request.form['userPhone']
            message = request.form['message']

            if form_type == "paraMim":
                send_mail(userName, userMail, userPhone, message)
                
            elif form_type == "paraFamiliar":
                relativeName = request.form['relativeName']
                relativeMail = request.form['relativeMail']
                relativePhone = request.form['relativePhone']
                send_mail(userName, userMail, userPhone, message,
                          relativeName=relativeName, relativeMail=relativeMail, relativePhone=relativePhone)

            return success_message()

        except Exception as e:
            print(f"Error: {e}")
            return error_message()

    return candidatar_page()
            
        

def success_message():
    
    flash("O seu formulário foi enviado com sucesso", "sucesso")
    return redirect(url_for("thank_you_page"))

def error_message():
    
    flash("O seu formulário não foi enviado, por favor tente outra vez", "erro")
    return redirect(url_for("candidatar_page"))

def candidatar_page():
    
    #Renders form page
    return render_template("candidatar.html")

def thank_you_page():
    
    #Renders after form page
    return render_template("sucess_form.html") 

def send_mail(name, mail, phone, message, relativeName=None, relativeMail=None, relativePhone=None):
    """Sends mail via personalized email"""
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls()
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        
        if relativeName:
            subject = "Formulário Submtido para Familiar"
            body = (f"Nome: {name}\nEmail: {mail}\nTelemóvel: {phone}\n\n"
                    f"Nome do Relativo: {relativeName}\nEmail do Relativo: {relativeMail}\n"
                    f"Telemóvel do Relativo: {relativePhone}\n\nMensagem: {message}")
        else:
            subject = "Formulário Submtido para Mim"
            body = (f"Nome: {name}\nEmail: {mail}\nTelemóvel: {phone}\n\nMensagem: {message}")
        
        msg = f"Subject: {subject}\n\n{body}"
        smtp.sendmail(from_addr=EMAIL_ADDRESS, 
                     to_addrs='alexandreadrianofranco@gmail.com',
                     msg=msg)

if __name__ == '__main__':
    app.run(debug=True)