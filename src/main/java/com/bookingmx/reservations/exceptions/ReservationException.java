package com.bookingmx.reservations.exceptions;

/**
 * Custom exception class that represents errors during reservation operations.
 * <p>
 * This class extends {@link java.lang.Exception} and is used to handle business errors
 * like duplicate IDs, missing customers, or invalid modification attempts.
 * </p>
 *
 * @author Jesús
 * @version 1.0
 * @since 2025-11
 */
public class ReservationException extends Exception {

    /**
     * Constructs a new {@code ReservationException} with a detailed message.
     *
     * @param message The descriptive error message.
     */
    public ReservationException(String message) {
        super(message);
    }
}