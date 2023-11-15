import express from "express";
import fs from "fs";
import cors from 'cors'
 
const PORT = 8080;
const app = express();
 
app.use(cors());
 
app.use(express.json());
 
 
//post
app.post("/user", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/user.json", (readError, data) => {
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
 
    let savedData = JSON.parse(data);
    const newUser = {
      id: Date.now().toString(),
      name: body.name,
      age: body.age,
    };
 
    savedData.push(newUser);
 
    fs.writeFile(
      "./data/user.json",
      JSON.stringify(savedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
          });
        } else {
          response.json({
            status: "success",
            data: savedData,
          });
        }
      }
    );
  });
});
 
//get
 
app.get("/user", (request, response) => {
  fs.readFile("./data/user.json", (readError, data) => {
    if (readError) {
      response.json({
        status: "error",
      });
    } else {
      const user = JSON.parse(data);
 
      response.json({
        status: "success",
        data: user,
      });
    }
  });
});
 
 
//delete
 
app.delete("/user/:id", (request, response) => {
  const body = request.params;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    const deletedData = savedData.filter((d) => d.id !== body.id);
    fs.writeFile(
      "./data/user.json",
      JSON.stringify(deletedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error",
          });
        }
        response.json({
          status: "success",
          data: deletedData,
        });
      }
    );
  });
});
 
 
//put
 
app.put("/user/:id", (request, response) => {
  const userId = request.params.id;
  const body = request.body;
 
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      return response.status(500).json({
        status: "read file error",
      });
    }
 
    let savedData = JSON.parse(data);
 
    const updatedData = savedData.map((user) => {
      if (user.id === userId) {
        user.name = body.name;
        user.age = body.age;
      }
      return user;
    });
 
    fs.writeFile(
      "./data/user.json",
      JSON.stringify(updatedData),
      (writeError) => {
        if (writeError) {
          return response.status(400).json({
            status: "write file error",
          });
        }
 
        response.json({
          status: "success",
          data: updatedData,
        });
      }
    );
  });
});
 
 
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});