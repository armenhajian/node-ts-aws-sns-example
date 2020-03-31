import { Router } from 'express';
import SnsRouter from './Sns';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/sns', SnsRouter);

// Export the base-router
export default router;
