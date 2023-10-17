export interface ApplicationConfig {
	serverPort: number;
	jwtSecret: string;
	jwtAccess: string;
	jwtRefresh: string;
	clientUrl: string;
}