import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

interface UserData {
  employeeId: string;
  fullName: string;
  email: string;
  phone: string;
  applicationNumber?: string;
  aadhaarNumber?: string;
  country?: string;
  state?: string;
  city?: string;
  pincode?: string;
  address?: string;
  joinDate: string;
}

interface Task {
  id: string;
  title: string;
  status: 'assigned' | 'pending' | 'completed';
  dueDate?: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [allEmployees, setAllEmployees] = useState<UserData[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [weeklyData, setWeeklyData] = useState<any[]>([]);
  const [contributionData, setContributionData] = useState<any[]>([]);

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('currentUser');
    if (!userData) {
      // Redirect to onboarding if no user data exists
      navigate('/');
      return;
    }

    const parsedUserData = JSON.parse(userData);
    setCurrentUser(parsedUserData);

    // Load all employees data
    const employeesData = localStorage.getItem('allEmployees');
    if (employeesData) {
      setAllEmployees(JSON.parse(employeesData));
    }

    // Generate mock tasks
    generateMockTasks();
    
    // Generate mock chart data
    generateMockChartData();
  }, [navigate]);

  const generateMockTasks = () => {
    const mockTasks: Task[] = [
      { id: '1', title: 'Complete project documentation', status: 'assigned' },
      { id: '2', title: 'Review code changes', status: 'pending' },
      { id: '3', title: 'Attend team meeting', status: 'completed' },
      { id: '4', title: 'Update client presentation', status: 'assigned' },
      { id: '5', title: 'Fix UI bugs in dashboard', status: 'pending' },
      { id: '6', title: 'Deploy application to staging', status: 'completed' },
      { id: '7', title: 'Prepare weekly report', status: 'assigned' },
      { id: '8', title: 'Test new features', status: 'pending' },
      { id: '9', title: 'Optimize database queries', status: 'completed' },
    ];
    setTasks(mockTasks);
  };

  const generateMockChartData = () => {
    // Weekly progress data
    const weeklyProgressData = [
      { name: 'Week 1', tasks: 5 },
      { name: 'Week 2', tasks: 8 },
      { name: 'Week 3', tasks: 6 },
      { name: 'Week 4', tasks: 12 },
      { name: 'Week 5', tasks: 9 },
      { name: 'Week 6', tasks: 15 },
    ];
    setWeeklyData(weeklyProgressData);

    // Team contribution data
    const teamContributionData = [
      { name: 'You', value: 35 },
      { name: 'Team A', value: 25 },
      { name: 'Team B', value: 20 },
      { name: 'Team C', value: 20 },
    ];
    setContributionData(teamContributionData);
  };

  const getTasksByStatus = (status: 'assigned' | 'pending' | 'completed') => {
    return tasks.filter(task => task.status === status);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!currentUser) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Employee Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome back, {currentUser.fullName}</p>
        </div>

        {/* User Information Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Employee ID</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentUser.employeeId}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentUser.fullName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentUser.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentUser.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Join Date</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{formatDate(currentUser.joinDate)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {[currentUser.city, currentUser.state, currentUser.country].filter(Boolean).join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Task Management Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Assigned Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Assigned Tasks <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({getTasksByStatus('assigned').length})</span>
            </h2>
            <ul className="space-y-3">
              {getTasksByStatus('assigned').map(task => (
                <li key={task.id} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <p className="text-gray-800 dark:text-gray-200">{task.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Pending Tasks <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({getTasksByStatus('pending').length})</span>
            </h2>
            <ul className="space-y-3">
              {getTasksByStatus('pending').map(task => (
                <li key={task.id} className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                  <p className="text-gray-800 dark:text-gray-200">{task.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Completed Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Completed Tasks <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({getTasksByStatus('completed').length})</span>
            </h2>
            <ul className="space-y-3">
              {getTasksByStatus('completed').map(task => (
                <li key={task.id} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <p className="text-gray-800 dark:text-gray-200">{task.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Weekly Progress Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Weekly Task Completion</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="tasks" stroke="#3B82F6" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Team Contribution Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Team Contribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Team Members <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({allEmployees.length})</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Employee ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Join Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {allEmployees.map((employee, index) => (
                  <tr key={employee.employeeId} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{employee.employeeId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{employee.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{employee.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{formatDate(employee.joinDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button
        onClick={() => {
            localStorage.removeItem('currentUser');
            navigate('/');
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
        Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;