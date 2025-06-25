"use client"
import { initialMembers, Member } from "@/app/components/user/datas";
import { MemberModal } from "@/app/components/user/membersModal";
import { MembersTable } from "@/app/components/user/membersTable";
import { Pagination } from "@/app/components/user/pagination";
import { SearchAndFilter } from "@/app/components/user/searchNFilter";
import { StatsCards } from "@/app/components/user/statsCards";
import { useEffect, useState } from "react";


const ChurchMembersTable = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(10);

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.ministry.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || member.membershipStatus === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  const handleAddMember = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  const handleEditMember = (member: Member) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDeleteMember = (id: number) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((member) => member.id !== id));
    }
  };

  const handleSaveMember = (memberData: Omit<Member, "id">) => {
    if (editingMember) {
      // Update existing member
      setMembers(
        members.map((member) =>
          member.id === editingMember.id
            ? { ...memberData, id: editingMember.id }
            : member
        )
      );
    } else {
      // Add new member
      const newMember: Member = {
        ...memberData,
        id: Math.max(...members.map((m) => m.id)) + 1,
      };
      setMembers([...members, newMember]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset pagination when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Church Members Directory
          </h1>
          <p className="text-lg text-gray-600">
            Manage your church community with love and care
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards members={members} />

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          onAddMember={handleAddMember}
        />

        {/* Members Table */}
        <MembersTable
          members={currentMembers}
          onEdit={handleEditMember}
          onDelete={handleDeleteMember}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={filteredMembers.length}
          itemsPerPage={membersPerPage}
          startIndex={indexOfFirstMember + 1}
          endIndex={Math.min(indexOfLastMember, filteredMembers.length)}
        />

        {/* Member Modal */}
        <MemberModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          member={editingMember}
          onSave={handleSaveMember}
        />
      </div>
    </div>
  );
};
export default ChurchMembersTable;
