# LEVEL 0: WRITABLE AND READABLE STREAMS

### STEP 1: RUN THE WRITABLE SAMPLE
```bash
$ node tinker_with_writable_streams.js
```

### STEP 2: VIEW OUTPUT
```bash
$ cat data.txt

Tutorial on Node.js
Introduction
Events | Generators | Data Connectivity
```

### STEP 3: RUN THE READABLE SAMPLE
```bash
$ node tinker_with_readable_streams.js
ReadStream {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 65536,
     buffer: BufferList { head: null, tail: null, length: 0 },
...
```

### STEP 4: FIX THE READABLE SAMPLE

The *tinker_with_readable_streams.js* sample is broken. We want to read the file that we just created with the *tinker_with_writable_streams.js* sample, but instead we're getting a bunch of junk.

To fix the sample, go in and remove the line:
```js
console.log(stream);
```

Replace it with the following lines:
```js
stream.on('data', (data) => {
    var chunk = data.toString();
    console.log(chunk);
});
```

### STEP 5: RUN THE READABLE SAMPLE AGAIN
```bash
$ node tinker_with_readable_streams.js

Tutorial on Node.js
Introduction
Events | Generators | Data Connectivity
```

**Success!**
