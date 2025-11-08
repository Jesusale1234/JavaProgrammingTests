package com.bookingmx.reservations.exceptions;

/**
 * Custom exception used to handle reservation-specific errors.
 */
public class ReservationException extends Exception {
    public ReservationException(String message) {
        super(message);
    }
}