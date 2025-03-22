import { NextResponse } from 'next/server';

// In a real application, you would connect to a database here
const subscribers: string[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'E-Mail-Adresse ist erforderlich.' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Ungültiges E-Mail-Format.' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { success: false, message: 'Diese E-Mail-Adresse ist bereits angemeldet.' },
        { status: 409 }
      );
    }
    
    // In a real application, you would save this to a database
    subscribers.push(email);
    console.log('Subscribers list:', subscribers);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Vielen Dank für Ihre Anmeldung!',
        subscribersCount: subscribers.length 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Interner Serverfehler.' },
      { status: 500 }
    );
  }
} 