# Vbuckers

## First of all

This project is a mobile app based on [Andrey Perevoznik' Game App & Gaming Store](https://www.behance.net/gallery/136400243/Game-App-Gaming-Store), but with some differences, either in appearence or in its features. 

## What's Vbuckers ?

Based on Andreys's idea I started coding Vbucker, on this app you can see the trending skins accord to the community, vote if you like or dislike them, track the skins that you own, and see other people's skins, there are many other features planned but that's what I did until now.

## Structure

The data comes from the [Fortnite API](https://fortnite-api.com/), they pass through a NodeJS server to receive some processing and then they're ready to be consumed by the mobile app

## Running locally

1. Clone this repository:

```bash
git clone repo_url
cd vbuckers
```

2. Install the server's dependencies:

```bash
cd server
npm install
```

3. Create a `.env` file:

```powershell
# Windows Powershell
$content = 'FORTNITE_API_KEY=' | out-file -filepath .\.env
```

or

```bash
# Linux
echo 'FORTNITE_API_KEY=' > .env
```

4. Provide a [Fortnite API](https://fortnite-api.com/) key to your ``.env`` file:

```
FORTNITE_API_KEY=YOUR_KEY_GOES_HERE
```

5. Run it:

```
npm run dev
```

6. In another terminal instance:

```bash
cd app
npm install
```

7. Run Expo:

```
npm run start
```



