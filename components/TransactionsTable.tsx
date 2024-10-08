import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatAmount, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {

  return (
    <section>
      <Table>
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            <TableHead className="px-2">Transações</TableHead>
            <TableHead className="px-2">Valor</TableHead>
            <TableHead className="px-2">Status</TableHead>
            <TableHead className="px-2">Data</TableHead>
            <TableHead className="px-2 max-md:hidden">Canal</TableHead>
            <TableHead className="px-2 max-md:hidden">Categoria</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t: Transaction) => {
            const status = getTransactionStatus(new Date(t.date));
            const amount = formatAmount(t.amount);

            const isDebit = t.type === "debit";
            const isCredit = t.type === "credit";

            return (
              <TableRow key={t.id}>
                <TableCell>
                  <div>
                    <h1>
                      {removeSpecialCharacters(t.name)} 
                    </h1>
                  </div>
                </TableCell>

                <TableCell>
                  {isDebit ? `-${amount}` : isCredit ? amount : amount}
                </TableCell>

                <TableCell>
                  {status}
                </TableCell>

                <TableCell>
                  {formatDateTime(new Date(t.date)).dateTime}
                </TableCell>

                <TableCell>
                  {t.paymentChannel}
                </TableCell>

                <TableCell>
                  {t.paymentChannel}
                </TableCell>

                <TableCell>
                  {t.category}
                </TableCell>
              </TableRow>
            )

          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default TransactionsTable;
