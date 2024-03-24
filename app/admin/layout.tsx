import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "GigFinder Admin",
  description: "GigFinder Admin",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
