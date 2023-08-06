import { Request, Response } from 'express';

class ExampleController {
    public example = async (request: Request, response: Response, next: any) => {
        response.json({ message: 'Works!' });
    }
}

export default new ExampleController();