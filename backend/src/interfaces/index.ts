export interface ApplicationConfig {
	serverPort: number;
	jwtSecret: string;
	jwtActive: string;
	jwtRefresh: string;
}