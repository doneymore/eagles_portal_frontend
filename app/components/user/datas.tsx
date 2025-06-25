export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  joinDate: string;
  ministry: string;
  membershipStatus: "Active" | "Inactive" | "Visitor";
  photo?: string;
}

export const initialMembers: Member[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    dateOfBirth: "1985-03-15",
    joinDate: "2020-01-15",
    ministry: "Worship Team",
    membershipStatus: "Active",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "Johnson",
    email: "mary.johnson@email.com",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave, City, State 12345",
    dateOfBirth: "1990-07-22",
    joinDate: "2019-06-10",
    ministry: "Children Ministry",
    membershipStatus: "Active",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b52a5d3c?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@email.com",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd, City, State 12345",
    dateOfBirth: "1978-11-08",
    joinDate: "2018-03-20",
    ministry: "Ushers",
    membershipStatus: "Active",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Brown",
    email: "sarah.brown@email.com",
    phone: "+1 (555) 456-7890",
    address: "321 Elm St, City, State 12345",
    dateOfBirth: "1992-05-12",
    joinDate: "2021-09-05",
    ministry: "Youth Ministry",
    membershipStatus: "Active",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 5,
    firstName: "Michael",
    lastName: "Davis",
    email: "michael.davis@email.com",
    phone: "+1 (555) 567-8901",
    address: "654 Maple Dr, City, State 12345",
    dateOfBirth: "1982-09-30",
    joinDate: "2017-11-15",
    ministry: "Sound & Media",
    membershipStatus: "Inactive",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 6,
    firstName: "Lisa",
    lastName: "Anderson",
    email: "lisa.anderson@email.com",
    phone: "+1 (555) 678-9012",
    address: "987 Cedar Ln, City, State 12345",
    dateOfBirth: "1988-12-03",
    joinDate: "2022-02-28",
    ministry: "Prayer Team",
    membershipStatus: "Visitor",
    photo:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 7,
    firstName: "Robert",
    lastName: "Taylor",
    email: "robert.taylor@email.com",
    phone: "+1 (555) 789-0123",
    address: "147 Birch Ave, City, State 12345",
    dateOfBirth: "1975-04-18",
    joinDate: "2016-08-12",
    ministry: "Hospitality",
    membershipStatus: "Active",
  },
  {
    id: 8,
    firstName: "Jennifer",
    lastName: "White",
    email: "jennifer.white@email.com",
    phone: "+1 (555) 890-1234",
    address: "258 Oak Street, City, State 12345",
    dateOfBirth: "1987-10-25",
    joinDate: "2019-12-03",
    ministry: "Evangelism",
    membershipStatus: "Active",
  },
];

export const ministries = [
  "Worship Team",
  "Children Ministry",
  "Youth Ministry",
  "Ushers",
  "Sound & Media",
  "Prayer Team",
  "Hospitality",
  "Evangelism",
  "Outreach",
  "Administration",
];
  