import { Injectable, computed, signal } from '@angular/core';
import { AlertEvent, Device } from './models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly _devices = signal<Device[]>(SEED_DEVICES);
  private readonly _alerts = signal<AlertEvent[]>(SEED_ALERTS);

  devices = computed(() => this._devices());
  alerts = computed(() => this._alerts().slice().sort((a, b) => b.occurredAt.localeCompare(a.occurredAt)));

  deviceById(id: string) {
    return computed(() => this._devices().find(d => d.id === id));
  }

  acknowledgeAlert(id: string) {
    this._alerts.update(list => list.map(a => a.id === id ? { ...a, acknowledged: true } : a));
  }
}

// --- seed demo data ---
const SEED_DEVICES: Device[] = [
  {
    id: '1',
    name: 'Vienna-Laptop-01',
    owner: 'Anna',
    tags: ['sales', 'windows'],
    model: 'Dell Latitude 7420',
    cpu: 'Intel i7',
    ramGb: 16,
    diskType: 'SSD',
    purchaseDate: '2022-03-15',
    warrantyExpiry: '2026-03-15',
    onlineStatus: 'ONLINE',
    lastSeen: new Date(Date.now() - 40_000).toISOString(),
    avgLatencyMs: 28,
    packetLossPct: 0.2,
    batteryPct: 62,
    batteryHealthPct: 78,
    charging: false,
    cpuAvgPct: 34,
    cpuSpikePct: 92,
    ramUsedPct: 71,
    processCount: 182,
    uptimeSeconds: 5 * 86400 + 3 * 3600,
    diskUsedPct: 83,
    freeDiskGb: 52,
    totalDiskGb: 512,
    smartStatus: 'OK',
    topConsumers: [
      { name: 'Adobe Cache', sizeGb: 18 },
      { name: 'Downloads', sizeGb: 12 },
      { name: 'Docker Images', sizeGb: 26 },
    ],
    osName: 'Windows',
    osVersion: '11 23H2',
    upToDate: false,
    pendingSecurityUpdates: 7,
    avStatus: 'ENABLED',
    encryption: 'ON',
  },
  {
    id: '2',
    name: 'Office-MiniPC-03',
    owner: 'IT',
    tags: ['kiosk', 'linux'],
    model: 'Intel NUC',
    cpu: 'Intel i5',
    ramGb: 8,
    diskType: 'NVME',
    purchaseDate: '2020-09-10',
    onlineStatus: 'OFFLINE',
    lastSeen: new Date(Date.now() - 6 * 3600_000).toISOString(),
    avgLatencyMs: 0,
    packetLossPct: 0,
    cpuAvgPct: 12,
    cpuSpikePct: 34,
    ramUsedPct: 44,
    processCount: 96,
    uptimeSeconds: 32 * 86400,
    diskUsedPct: 91,
    freeDiskGb: 9,
    totalDiskGb: 256,
    smartStatus: 'WARN',
    osName: 'Ubuntu',
    osVersion: '22.04',
    upToDate: true,
    pendingSecurityUpdates: 0,
    avStatus: 'UNKNOWN',
    encryption: 'OFF',
  },
];

const SEED_ALERTS: AlertEvent[] = [
  {
    id: 'a-001',
    deviceId: 'dev-001',
    deviceName: 'Vienna-Laptop-01',
    type: 'HIGH_CPU',
    severity: 'WARNING',
    message: 'CPU sustained > 85% for 12 minutes.',
    occurredAt: new Date(Date.now() - 2 * 3600_000).toISOString(),
  },
  {
    id: 'a-002',
    deviceId: 'dev-002',
    deviceName: 'Office-MiniPC-03',
    type: 'OFFLINE_TOO_LONG',
    severity: 'CRITICAL',
    message: 'Device offline for > 6 hours.',
    occurredAt: new Date(Date.now() - 30 * 60_000).toISOString(),
  },
  {
    id: 'a-003',
    deviceId: 'dev-001',
    deviceName: 'Vienna-Laptop-01',
    type: 'SECURITY_UPDATES_PENDING',
    severity: 'INFO',
    message: '7 security updates pending.',
    occurredAt: new Date(Date.now() - 5 * 3600_000).toISOString(),
    acknowledged: true,
  }
];
