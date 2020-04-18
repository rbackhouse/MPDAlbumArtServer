# MPDAlbumArtServer

Node.js based Album Art File server for use with [MaximumMPD](https://github.com/rbackhouse/MaximumMPD).

When MaximumMPD is configured to use HTTP for downloading Album Art images it can use this Server to do the file serving.

#### Usage

```
node lib/MPDAlbumArtServer.js [album art files path] [port]
```

e.g

```
node lib/MPDAlbumArtServer.js /Users/rbackhouse/Music/flac/ 8080
```
