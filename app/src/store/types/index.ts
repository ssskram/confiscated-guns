// user
export interface user {
  email: string;
  organization: string;
  name: string;
}

// select
export type select = { value: string; label: string };

// gun records
export interface guns {
  guns: gun[];
}

export interface gun {
  serialNumber: string;
  gunMake: string;
  gunModel: string;
  gunCaliber: string;
  dateOfRecovery: string;
  gunType: string;
  originatingAgencyCaseNumber: string;
  linkageAgencyIdentifier: string;
  linkageAgencyCaseNumber: string;
  notifyOriginatingAgency: string;
  miscellaneous: string;
  name: string;
  dateOfBirth: string;
  operatorsLicenseNumber: string;
  licenseState: string;
  possessedByProhibitedPerson: string;
  chargedWithCrime: string;
  permitInLTC: string;
  createdBy: string;
  created: string;
  postedNCIC: string;
}
