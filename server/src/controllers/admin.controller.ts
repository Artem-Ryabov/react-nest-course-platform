import { Controller } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { mainRoutes } from '../constants/routes';

@Controller(mainRoutes.admin)
export class AdminController {
  constructor(private adminService: AdminService) {
  }
}
