import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard';
import DailyOrders from '../components/orders/DailyOrders';
import OrdersDistribution from '../components/orders/OrdersDistribution';

const ORDER_STATS = {
  totalOrders: '1,234',
  pendingOrders: '56',
  completedOrders: '1,178',
  totalRevnue: '$98, 765'
}
const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
      <Header title='Orders'/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
         className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         >
          <StatCard name='Total Orders' icon={ShoppingBag} value={ORDER_STATS.totalOrders} color='#6366F1'/>
          <StatCard name='Pending Orders' icon={Clock} value={ORDER_STATS.pendingOrders} color='#F59E0B'/>
          <StatCard name='Completed Orders' icon={CheckCircle} value={ORDER_STATS.completedOrders} color='#10B981'/>
          <StatCard name='Total Revenue' icon={DollarSign} value={ORDER_STATS.totalRevnue} color='#EF4444'/>
          
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <DailyOrders />
          <OrdersDistribution />
        </div>
      </main>
    </div>
  )
}

export default OrdersPage