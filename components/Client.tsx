import axios from 'axios';

const API_BASE_URL = 'https://api.srvio.pro/api'; // Replace with your actual API base URL

export interface WireGuardClient {
  id: string;
  name: string;
  publicKey: string;
  allowedIPs: string;
}

export interface WireGuardServerConfig {
  id: string;
  name: string;
  publicKey: string;
  privateKey: string;
  address: string;
  listenPort: number;
}

export interface Organization {
  id: string;
  name: string;
  description: string;
}
let token = process.env.API_TOKEN;
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

// export const wireGuardApi = {
//   // WireGuard Clients
//   getClients: () => api.get<WireGuardClient[]>('/wireguard/clients'),
//   createClient: (client: Omit<WireGuardClient, 'id'>) => api.post<WireGuardClient>('/wireguard/clients', client),
//   updateClient: (id: string, client: Partial<WireGuardClient>) => api.put<WireGuard>(`/wireguard/clients/${id}`, client),
//   deleteClient: (id: string) => api.delete(`/wireguard/clients/${id}`),

//   // WireGuard Server Config
//   getServerConfig: () => api.get<WireGuardServerConfig>('/wireguard/server-config'),
//   updateServerConfig: (config: Partial<WireGuardServerConfig>) => api.put<WireGuardServerConfig>('/wireguard/server-config', config),

//   // Organizations
//   getOrganizations: () => api.get<Organization[]>('/organizations'),
//   createOrganization: (org: Omit<Organization, 'id'>) => api.post<Organization>('/organizations', org),
//   updateOrganization: (id: string, org: Partial<Organization>) => api.put<Organization>(`/organizations/${id}`, org),
//   deleteOrganization: (id: string) => api.delete(`/organizations/${id}`),
// };
