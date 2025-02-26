import Router from 'express';

const userRouter = Router();

userRouter.get('/', ((req,res) => {
  res.send({"rout" : "api/users/"});
}));

export default userRouter;