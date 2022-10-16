import { Request, Response } from "express";
import Mailservice from "../services/Mailservice";

interface CreateUserBody{
  name: string; 
  email: string;
}

class UseController {
  findAll(request: Request, response: Response){
    return response.json({
      users: [
        {
          name: "John Doe",
          email: "JohnDoe@rail.com"
        },
      ],
    });
  }

  create(request: Request<any, any, CreateUserBody>, response: Response){ // PayLoad 
    const { name, email } = request.body;
    

    Mailservice.sendmail({
        to: {
          name,
          email
        },
        message: {
          subject: "",
          body: `Seja bem-vindo ${name} o seu email cadastrado e ${email}`
        }
      }
    );

    return response.send()
  }
}

export default new UseController();