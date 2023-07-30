const http = require('http');

const clubInfo = {
  clubName: 'COMP',
  clubLocation: 407,
  clubMembers: ['윤재선', '한윤호'],
};

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // POST 요청일 경우
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const newMember = '김두회'; 
      clubInfo.clubMembers.push(newMember);

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(clubInfo));
    });
  } else if (req.method === 'GET') {
    // GET 요청일 경우
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(clubInfo));
  } else {
    res.statusCode = 404;
    res.end();
  }
});


server.listen(8080, () => {
  console.log("8080");
});