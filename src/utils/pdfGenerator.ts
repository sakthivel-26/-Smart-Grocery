import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { Sale, StoreSettings } from '@/types';
import { format } from 'date-fns';

export function generateInvoicePDF(sale: Sale, settings: StoreSettings) {
  const doc = new jsPDF({ unit: 'mm', format: [80, 200] });

  let y = 10;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(settings.storeName, 40, y, { align: 'center' });
  y += 5;

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text(`${settings.storeAddress}, ${settings.storeCity}`, 40, y, { align: 'center' });
  y += 3.5;
  doc.text(`GST: ${settings.gstNumber} | Ph: ${settings.storePhone}`, 40, y, { align: 'center' });
  y += 5;

  doc.setDrawColor(150);
  doc.setLineDashPattern([1, 1], 0);
  doc.line(5, y, 75, y);
  y += 4;

  doc.setFontSize(7);
  doc.text(`Invoice: ${sale.invoiceNumber}`, 5, y);
  doc.text(format(new Date(sale.createdAt), 'dd/MM/yy HH:mm'), 75, y, { align: 'right' });
  y += 3.5;
  doc.text(`Customer: ${sale.customerName}`, 5, y);
  y += 3.5;
  doc.text(`Cashier: ${sale.createdBy}`, 5, y);
  y += 4;

  doc.line(5, y, 75, y);
  y += 2;

  const tableData = sale.items.map(item => [
    item.productName.substring(0, 20),
    item.quantity.toString(),
    `${settings.currencySymbol}${item.unitPrice}`,
    `${settings.currencySymbol}${item.totalAmount.toFixed(2)}`
  ]);

  autoTable(doc, {
    startY: y,
    head: [['Item', 'Qty', 'Price', 'Amount']],
    body: tableData,
    theme: 'plain',
    styles: { fontSize: 6.5, cellPadding: 1.5, textColor: [0, 0, 0] },
    headStyles: { fontStyle: 'bold', fontSize: 7 },
    columnStyles: {
      0: { cellWidth: 30 },
      1: { cellWidth: 8, halign: 'center' },
      2: { cellWidth: 14, halign: 'right' },
      3: { cellWidth: 16, halign: 'right' },
    },
    margin: { left: 5, right: 5 },
  });

  y = (doc as any).lastAutoTable.finalY + 3;

  doc.line(5, y, 75, y);
  y += 4;

  doc.setFontSize(7);
  const rightX = 75;
  doc.text('Subtotal:', 5, y);
  doc.text(`${settings.currencySymbol}${sale.subtotal.toFixed(2)}`, rightX, y, { align: 'right' });
  y += 3.5;

  if (sale.totalDiscount > 0) {
    doc.text('Discount:', 5, y);
    doc.text(`-${settings.currencySymbol}${sale.totalDiscount.toFixed(2)}`, rightX, y, { align: 'right' });
    y += 3.5;
  }

  doc.text('GST (incl.):', 5, y);
  doc.text(`${settings.currencySymbol}${sale.totalGst.toFixed(2)}`, rightX, y, { align: 'right' });
  y += 4;

  doc.line(5, y, 75, y);
  y += 4;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('Grand Total:', 5, y);
  doc.text(`${settings.currencySymbol}${sale.grandTotal.toFixed(2)}`, rightX, y, { align: 'right' });
  y += 5;

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text(`Payment: ${sale.paymentMethod.toUpperCase()}`, 5, y);
  y += 3.5;

  if (sale.paymentMethod === 'cash') {
    doc.text(`Received: ${settings.currencySymbol}${sale.cashReceived.toFixed(2)}`, 5, y);
    y += 3.5;
    doc.text(`Change: ${settings.currencySymbol}${sale.changeGiven.toFixed(2)}`, 5, y);
    y += 5;
  }

  doc.line(5, y, 75, y);
  y += 4;

  doc.setFontSize(7);
  doc.text(settings.invoiceFooter, 40, y, { align: 'center', maxWidth: 65 });

  doc.save(`Invoice-${sale.invoiceNumber}.pdf`);
}

export function generateReportPDF(
  title: string,
  headers: string[],
  data: string[][],
  settings: StoreSettings,
  summary?: { label: string; value: string }[]
) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(settings.storeName, 105, 15, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`${settings.storeAddress}, ${settings.storeCity}`, 105, 21, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 105, 32, { align: 'center' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated: ${format(new Date(), 'dd MMM yyyy, hh:mm a')}`, 105, 38, { align: 'center' });

  autoTable(doc, {
    startY: 44,
    head: [headers],
    body: data,
    theme: 'striped',
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [37, 99, 235], fontStyle: 'bold' },
  });

  if (summary && summary.length > 0) {
    let y = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Summary', 14, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    summary.forEach(s => {
      doc.text(`${s.label}: ${s.value}`, 14, y);
      y += 5;
    });
  }

  doc.save(`${title.replace(/\s+/g, '_')}_${format(new Date(), 'yyyyMMdd')}.pdf`);
}

export function exportToCSV(filename: string, headers: string[], data: string[][]) {
  const csvContent = [
    headers.join(','),
    ...data.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}_${format(new Date(), 'yyyyMMdd')}.csv`;
  link.click();
}
