Run the following code to generate a private key using OpenSSL:

```bash
$ openssl genrsa -out private-key.pem 1024
```

This creates a suitable private key and writes it to `./private-key.pem`

Next create a Certificate Signing Request file using your private key:

```bash
$ openssl req -new -key private-key.pem -out csr.pem
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:California
Locality Name (eg, city) []:Oakland
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Panco, Inc.
Organizational Unit Name (eg, section) []:
Common Name (eg, YOUR name) []:Joshua Holbrook
Email Address []:josh.holbrook@gmail.com

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:dangerface
An optional company name []:
```

The purpose of this CSR is to "request" a certificate. That is, if you wanted a CA to sign your certificate, you could give this file to them to process and they would give you back a certificate.

Alternately, however, you may self-sign your certificate, again using your private key:

$ openssl x509 -req -in csr.pem -signkey private-key.pem -out public-cert.pem
Signature ok
subject=/C=US/ST=California/L=Oakland/O=Panco, Inc./CN=Joshua Holbrook/emailAddress=josh.holbrook@gmail.com
Getting Private key


Trying it out:
One way to test out your new "hello world" server is to again use OpenSSL:

openssl s_client -connect 127.0.0.1:8000