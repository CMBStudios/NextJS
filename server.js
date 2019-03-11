const next = require("next");
const express = require("express");
const axios = require("axios");
const fetch = require('isomorphic-unfetch');
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 4000;
const app = next({ dev });
const handle = app.getRequestHandler();

const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRET = "asldkfjals23ljk";
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true
};

const authenticate = async (email, password) => {
  const user = await axios.post(
    "https://www.theacademist.com/api/v1/user/login",
    {
      "email": email,
      "password": password
    }
  )
  //console.log(user)
      return user.data
};

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(cookieParser(COOKIE_SECRET));

  server.post("/api/login", async (req, res) => {
    const user = await authenticate(req.body.email, req.body.password);
    if (!user.token) {
      return res.status(403).send("Invalid email or password");
    }
    //console.log(user.user)
    const {id, firstName, lastName, email, coin, image} = user.user;
    const userData = {
      token: user.token,
      user_id: id,
      firstName: firstName,
      lastName: lastName,
      coin: coin,
      image: image,
      email: email,
      type: AUTH_USER_TYPE
    };
    res.cookie("token", userData, COOKIE_OPTIONS);
    res.json(user);
  });

  server.post("/api/logout", (req, res) => {
    res.clearCookie("token", COOKIE_OPTIONS);
    res.sendStatus(204);
  });

  server.get("/api/profile/:id", async (req, res) => {
    const { signedCookies = {} } = req;
    const { token } = signedCookies;
    //console.log(token)
    if (token && token.token && token.user_id) {
      const { data } = await axios.get(
        `https://www.theacademist.com/api/v1/user/${req.params.id}`, {
          headers: {
            Authorization: `${token.token}`
          }
        }
      );
      const userProfile = data
      return res.json({ user: userProfile });
    }
    res.sendStatus(404);
  });

  server.post("/api/scholarship", async (req, res) => {
    const { signedCookies = {} } = req;
    const { token } = signedCookies;
    console.log(token)
    //if (token && token.token && token.user_id) {
      try{
        await fetch(`https://www.theacademist.com/api/v1/scholarship/search`,
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': token.token},
            mode: 'cors',
            body: JSON.stringify({
            "major": req.body.major,
            "level": req.body.level,
            "gpa": req.body.gpa,
            "criteria": req.body.criteria,
            "user_id": token.user_id,
            "country": req.body.country,
            "amount": req.body.amount,
            "applicantCountry": req.body.applicantCountry,
            "offset": req.query.offset
            })
          })
          .then(
            res => res.json()
          )
          .then(
            result => {
              if(result.message == "Not enough coins"){
                return res.json({"message": "Not enough coins"})
              }
              return res.json({ ...result });
            }
          )
        }catch(e){
          console.log(e)
        }
   // }
   // res.sendStatus(404);
  });

  server.get("/api/scholarship/:id", async (req, res) => {
    const { signedCookies = {} } = req;
    const { token } = signedCookies;
    //console.log(token)
    if (token && token.token && token.user_id) {
      const { data } = await axios.get(
        `https://www.theacademist.com/api/v1/scholarship/${req.params.id}`, {
          headers: {
            Authorization: `${token.token}`
          }
        }
      );
      const scholarshipData = data
      return res.json({ scholarship: scholarshipData });
    }
    res.sendStatus(404);
  });

  server.post("/api/gpa", async (req, res) => {
      const { data } = await axios.post(
        `https://www.theacademist.com/api/v1/school/search-by-gpa`,
          {
            "level": req.body.level,
            "gpa": req.body.gpa,
            "state": req.body.state,
            "offset": req.body.offset
          }
      );
      const gpaData = data
      return res.json(gpaData);
    
  });

  server.get("/api/gpa/:id", async (req, res) => {
      const { data } = await axios.get(
        `https://www.theacademist.com/api/v1/school/${req.params.id}`,
      );
      const gpaData = data
      return res.json({ gpa: gpaData });
    
  });

  server.post("/api/major", async (req, res) => {
    console.log(req.body.major)
      const { data } = await axios.post(
        `https://www.theacademist.com/api/v1/school/search-by-major`,
          {
            "major": req.body.major,
            "level": req.body.level,
            "country": req.body.country,
            "state": req.body.state,
            "offset": req.body.offset
          }
      );
      const majorData = data
      return res.json(majorData);
    
  });

  server.get("/api/major/:id", async (req, res) => {
      const { data } = await axios.get(
        `https://www.theacademist.com/api/v1/school/search-by-major`,
      );
      const majorData = data
      return res.json({ major: majorData });
    
  });

  server.get("/api/blog", async (req, res) => {
    const { data } = await axios.get(
      `https://www.theacademist.com/api/v1/blog`
    );
    const blogList = data
    return res.json(blogList);
});

  server.get("/api/blog/:id", async (req, res) => {
      const { data } = await axios.get(
        `https://www.theacademist.com/api/v1/blog/${req.params.id}`
      );
      const singleBlog = data
      return res.json({ blog: singleBlog });
  });

  server.get("/api/forum", async (req, res) => {
    const { data } = await axios.get(
      `https://www.theacademist.com/api/v1/forum`
    );
    const forumList = data
    return res.json({ forumList });
});

  server.get("/api/forum/:id", async (req, res) => {
      const { data } = await axios.get(
        `https://www.theacademist.com/api/v1/forum/${req.params.id}`
      );
      const singleForum = data
      return res.json({ singleForum });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
