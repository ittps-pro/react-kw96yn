import axios from 'axios';


let config = {
  baseURL: process.env.API_BASE_URL,
  token: process.env.API_TOKEN,
};

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

export interface Server {
  id: string;
  name: string;
  ip: string;
  port: number;
  description?: string;
}

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + config.token,
  },
});

export const clients = (id) => {
  get: (id: number) => {
    console.log(id)

  };
  create: (data: WireGuardClient) => {

    console.log(data)
  },
  update: (id: number, data: any) => {
    console.log(id)
  }
};

export const wireGuardApi = {
  // WireGuard Clients
  getClients: () => api.get<WireGuardClient[]>('/wireguard/clients'),

  createClient: (client: Omit<WireGuardClient, 'id'>) =>
    api.post<WireGuardClient>('/wireguard/clients', client),

  updateClient: (id: string, client: Partial<WireGuardClient>) =>
    api.put<WireGuardClient>(`/wireguard/clients/${id}`, client),
  deleteClient: (id: string) => api.delete(`/wireguard/clients/${id}`),

  // WireGuard Server Config
  getServerConfig: () =>
    api.get<WireGuardServerConfig>('/wireguard/server-config'),
  updateServerConfig: (config: Partial<WireGuardServerConfig>) =>
    api.put<WireGuardServerConfig>('/wireguard/server-config', config),

  // Organizations
  getOrganizations: () => api.get<Organization[]>('/organizations'),
  createOrganization: (org: Omit<Organization, 'id'>) =>
    api.post<Organization>('/organizations', org),
  updateOrganization: (id: string, org: Partial<Organization>) =>
    api.put<Organization>(`/organizations/${id}`, org),
  deleteOrganization: (id: string) => api.delete(`/organizations/${id}`),
};
