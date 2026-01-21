export type DeviceId = string;

export type SmartStatus = 'OK' | 'WARN' | 'FAIL' | 'UNKNOWN';
export type OnlineStatus = 'ONLINE' | 'OFFLINE';
export type AvStatus = 'ENABLED' | 'DISABLED' | 'UNKNOWN';
export type EncryptionStatus = 'ON' | 'OFF' | 'UNKNOWN';

export type AlertSeverity = 'CRITICAL' | 'WARNING' | 'INFO';

export type Device = {
  id: DeviceId;
  name: string;
  owner?: string;
  tags: string[];

  // Hardware & age
  model: string;
  cpu: string;
  ramGb: number;
  diskType: 'HDD' | 'SSD' | 'NVME' | 'UNKNOWN';
  purchaseDate?: string;   // ISO date
  warrantyExpiry?: string; // ISO date

  // Network
  onlineStatus: OnlineStatus;
  lastSeen: string; // ISO timestamp
  avgLatencyMs?: number;
  packetLossPct?: number;

  // Battery (if applicable)
  batteryPct?: number;
  batteryHealthPct?: number; // 0-100
  charging?: boolean;

  // Performance
  cpuAvgPct?: number;    // 0-100
  cpuSpikePct?: number;  // 0-100
  ramUsedPct?: number;   // 0-100
  processCount?: number;
  uptimeSeconds?: number;

  // Storage
  diskUsedPct?: number;       // 0-100
  freeDiskGb?: number;
  totalDiskGb?: number;
  smartStatus?: SmartStatus;
  fragmentationPct?: number;  // optional/relevant
  topConsumers?: { name: string; sizeGb: number }[];

  // OS & Security
  osName?: string;
  osVersion?: string;
  upToDate?: boolean;
  pendingSecurityUpdates?: number;
  avStatus?: AvStatus;
  encryption?: EncryptionStatus;
};

export type AlertEvent = {
  id: string;
  deviceId: DeviceId;
  deviceName: string;
  type:
    | 'OVERHEAT'
    | 'LOW_DISK'
    | 'HIGH_CPU'
    | 'LOW_BATTERY_HEALTH'
    | 'OFFLINE_TOO_LONG'
    | 'SECURITY_UPDATES_PENDING'
    | 'SMART_FAIL';
  severity: AlertSeverity;
  message: string;
  occurredAt: string; // ISO timestamp
  acknowledged?: boolean;
};
