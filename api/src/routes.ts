import { Router } from 'express';

const router = Router();

router.get('/', () => console.log('rota acessada'))

export { router }