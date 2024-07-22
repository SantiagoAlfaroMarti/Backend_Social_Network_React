import { Router } from 'express';
import { router as userRoutes} from './entities/users/users.routes.js';
import { router as authRoutes } from './entities/auth/auth.routes.js';
import { router as postsRoutes } from './entities/posts/posts.routes.js';

const router = Router()

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/posts', postsRoutes)

export { router }